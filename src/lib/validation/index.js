import Ajv from 'ajv';

const defaultsOptions = {
  required : [],
  additionalProperties : false,
}

export const createValidator = (properties, options) => {
  const ajv = new Ajv({allErrors: true, jsonPointers: true});

  ajv.addFormat('phone', /[0-9]{2,3}\-[0-9]{3,4}\-[0-9]{3,4}/);
  ajv.addFormat('crNo', /[가-힣]*[0-9]+[가-힣][0-9]{4}/);
  ajv.addFormat('time', /[0-9]{2}\:[0-9]{2}\:[0-9]{2}/);
  ajv.addFormat('dateTime', /[0-9]{4}\-[0-9]{2}\-[0-9]{2} [0-9]{2}\:[0-9]{2}\:[0-9]{2}/);

  const defaults = {
    type: 'object',
    additionalProperties: true,
    ...defaultsOptions,
    ...options,
    properties,
  }

  const complied = ajv.compile(defaults)

  const getPathAndTextByError = error => {
    const { keyword, params, dataPath } = error
    const { type, format, limit, additionalProperty, missingProperty } = params

    let pathList = dataPath.split('/').slice(1)
    let message = ''
    let field = pathList[pathList.length-1]

    switch(keyword){
      case 'type' :
        message += defaultFormatErrorText[type]
        break
      case 'format' :
        message += defaultFormatErrorText[format]
        break
      case 'maximum' :
        message += `최대 ${limit}까지 입력가능합니다.`
        break
      case 'minimum' :
        message += `최소 ${limit}이상 입력하십시오.`
        break
      case 'maxLength' :
        message += `최대 ${limit}글자까지 입력가능합니다.`
        break
      case 'minLength' :
        message += `최소 ${limit}글자 이상 입력하십시오.`
        break
      case 'minItems' :
        message += `최소 ${limit}개 이상 선택(입력)하십시오.`
        break
      case 'maxItems' :
        message += `최대 ${limit}개 이하 선택(입력)하십시오.`
        break
      case 'additionalProperties' :
        field = additionalProperty
        message += `허용되지 않았습니다.`
        pathList = [additionalProperty]
        break
      case 'required' :
        field = missingProperty
        message += `필수 입력값입니다.`
        pathList = [missingProperty]
        break
    }
    
    return {
      message,
      field,
      pathList,
    }
  }

  const parseEmptyArray = array => array.map(item => {
    if(Array.isArray(item)){
      return parseEmptyArray(item)
    } else if(typeof item === 'object'){
      return parseEmptyObject(item)
    } else {
      return {}
    }
  }) 

  const parseEmptyObject = object => Object.keys(object).reduce((obj, key)=>{
    const item = object[key]
    if(Array.isArray(item)){
      obj[key] = parseEmptyArray(item)
    } else if(item !== null && typeof item === 'object'){
      obj[key] = parseEmptyObject(item)
    } else {
      obj[key] = {}
    }
    return obj
  },{})

  const getLabelFromCompliedSchema = (pathList) => {
    const { schema : { properties }} = complied

    if(properties){
      console.log("getLabelFromSchemaByPath -> pathList", pathList)
      //["testCode"]
      //["listA", "0", "name"]
      //["optionList", "0"]

      pathList.reduce((obj, path) => {
        const item = obj[path]
        if(item){
          const { items, type, properties, label } = item


        } else {
          return ''
        }
        return item
      }, properties)

    }
  }

  return {
    validate(data){
      const success = complied(data)
      const { schema, errors:errorsOrigin } = complied
      const schemaProperties = schema.properties || {}
      
      console.log("validate -> data", data)
      console.log("validate -> schemaProperties", schemaProperties)
      console.log("validate -> errorsOrigin", errorsOrigin)

      const errors = parseEmptyObject(data)
      console.log("validate -> errors", errors)

      errorsOrigin && errorsOrigin.forEach((error, i) => {
        const pathAndText = getPathAndTextByError(error)
        const { message, field, pathList } = pathAndText
        const label = getLabelFromCompliedSchema(pathList)



      })

      console.log("validate -> errors", errors)

      return {
        success,
        errors,
      }
    }
  } 
};


const defaultFormatErrorText = {
  string: '텍스트형식 이어야 합니다.',
  number: '숫자형식 이어야 합니다.',
  date : '날짜형식 이어야 합니다. (예: 2020-01-01)',
  time : '시간 형식이어야 합니다. (예: 16:30:00)',
  dateTime : '날짜&시간 형식이어야 합니다. (예: 2020-01-01 16:30:00)',
  email : '이메일 형식이어야 합니다. (예: abcd@gmail.com)',
  phone : '전화번호 형식이어야 합니다. (예: 010-0000-1111)',
  crNo : '차량번호 형식이어야 합니다. (예: 1가1234)',
}