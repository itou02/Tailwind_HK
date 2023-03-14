import logo from "./logo.svg";
import "./tailwind.css";
// import "./App.css";

function App() {
  return (
    <div className="App" class="p-4">
      <div class="w-64 mx-auto">
        <p class="w-60 flex text-2xl text-center bg-sky-100">Zoe的Tailwind練習~~</p>
      </div>
      <p>1.</p>
      <div className="w-32 h-32 pl-8 pr-4 m-4 p-8 border scale-80 text-center">Yo Battle</div>
      <p>2.</p>
      <div className="w-16 m-4 text-center bg-green text-red">
        text
      </div>
      <p>3.</p>
      <div>
        <button className="w-20 m-4 p-1 text-center rounded-2xl bg-blue text-white hover:bg-darkblue">hungry</button>
        </div>
      <p>4.</p>
      <div>
        <button className="w-20 m-4 p-1 text-center rounded-2xl bg-purple  hover:bg-darkpurple focus:ring-4 focus:ring-darkorange">cookie</button>
      </div>
      <div class="max-w-sm mx-auto">
        <p>5.</p>
        <div class="p-2 rounded-lg block text-center bg-orange sm:bg-green md:bg-yellowgreen lg:bg-blue text-black md:text-white">哈囉你好嗎 衷心感謝 珍重再見 期待再相逢</div>
      </div>
    </div>
  );
}

export default App;
