import './App.scss';
// import { MyComponent } from './example/MyComponent';
import { ListTodo } from './todo/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <h1>Hoc React Class voi Quoc Duy</h1>
      <ListTodo />
      {/* <MyComponent /> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
