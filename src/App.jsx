import RecursiveComponent from './components/RecursiveComponent';
import './App.css';

const data = [
  {
    id: 1,
    title: 'folder 1',
    children: [
      {
        id: 11,
        title: 'folder 11',
        children: []
      },
      {
        id: 12,
        title: 'file 12'
      },
      {
        id: 13,
        title: 'file 13'
      }
    ]
  },
  {
    id: 2,
    title: 'folder 2',
    children: [
      {
        id: 21,
        title: 'file 21'
      },
      {
        id: 22,
        title: 'file 22'
      }
    ]
  },
  {
    id: 3,
    title: 'folder 3',
    children: [
      {
        id: 31,
        title: 'folder 31',
        children: [
          {
            id: 311,
            title: 'folder 311',
            children: [
              {
                id: 3111,
                title: 'file 3111'
              },
              {
                id: 3112,
                title: 'file 3112'
              }
            ]
          },
          {
            id: 312,
            title: 'file 312'
          }
        ]
      },
      {
        id: 32,
        title: 'file 32'
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <RecursiveComponent data={data} />
    </div>
  );
}

export default App;
