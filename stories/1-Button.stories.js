import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"; //props 부여
import PropTypes from 'prop-types';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "Arunoda Susiripala");
  const age = number("Age", 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
};

export const Hello = ({ name, big, onHello, onBye }) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.story = {
  name: 'Component 테스트',
}


Hello.propTypes = {
  /** 보여주고 싶은 이름 */
  name: PropTypes.string.isRequired,
  /** 이 값을 `true` 로 설정하면 h1 태그로 렌더링 됩니다. */
  big: PropTypes.bool,
  /** Hello 버튼 누를 때 호출할 함수 */
  onHello: PropTypes.func,
  /** Bye 버튼 누를 때 호출할 함수 */
  onBye: PropTypes.func
};

