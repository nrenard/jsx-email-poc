import Welcome from './templates/Welcome';

export default function App() {
  return {
    Welcome: {
      componentFunction: Welcome,
      props: {
        paragraph: 'string',
      },
    },
  };
}