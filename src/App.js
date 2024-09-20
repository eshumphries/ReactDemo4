import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>This works</h1>
          <Profile/>
          <MyButton/>
        </div>
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>Does this work?</button>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://image.tmdb.org/t/p/original/qH15pDp99SXcMIuGFV7fU1x4Wqt.jpg',
  imageSize: 90,
};

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{
//         width: user.imageSize,
//         height: user.imageSize
//       }}
//       />
//     </>
//   );
// }

export default App;
