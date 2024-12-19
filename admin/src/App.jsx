
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage.jsx';
import ContentAddPage from '../pages/SentencesManagePage/ContentAddPage.jsx';
import ContentPageSentences from '../pages/SentencesManagePage/ContentPageSentences.jsx';
import UserPage from '../pages/UserManagePage/UserPage.jsx';
import ContentPageVideo from '../pages/VideoManagePage/ContentPageVideo.jsx';
import VideoAddPage from '../pages/VideoManagePage/VideoAddPage.jsx';
import ContentPage from '../pages/WordManagePage/ContentPage.jsx';
import WordAddPage from '../pages/WordManagePage/WordAddPage.jsx';
import './App.css';
function App() {
  return (
    <>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/contentw' element={<ContentPage/>}></Route>
        <Route path='/userm' element={<UserPage/>}></Route>
        <Route path='/addc' element={<ContentAddPage/>}></Route>
        <Route path='/addv' element={<VideoAddPage/>}></Route>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/addw' element={<WordAddPage/>}></Route>
        <Route path='/contentv' element={<ContentPageVideo/>}></Route>
        <Route path='/contents' element={<ContentPageSentences/>}></Route>
      </Routes>
    </>
  )
}

export default App
