import db from '../firebase';

function App() {
  let data=[];
  db.collection('blog')
  .onSnapshot((snapshot)=>{
    snapshot.docs.map((doc)=>{
    console.log(doc.data());
    // data.push(doc.data().title);
    });
  })
  return (
    <div className="App">
    <h1>Blojkhghfdfg</h1>{data[0] }
    </div>
  );
}

export default App;
