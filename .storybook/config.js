import { configure, addParameters, addDecorator } from '@storybook/react';
import React from 'react';
import '../src/styles/normalize.scss'

// const styles = {
//     textAlign: 'left',
// };
// const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

// addDecorator(CenterDecorator);

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced', },
    { name: 'facebook', value: '#3b5998' },
  ],
});

configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
