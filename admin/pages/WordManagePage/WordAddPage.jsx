import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader';
import LevelSelector from '../../components/LevelSelector';
import WordSelector from '../../components/WordSelector';
import WordTypeSelector from '../../components/WordTypeSelector';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ContentAddPage() {
    const [word, setWord] = useState("");
    const [mean, setMean] = useState("");
    const [examples, setExamples] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");
    const [phonetic, setPhonetic] = useState("");
    const [note, setNote] = useState("");
    const [specialty, setSpecialty] = useState('');
    const [topics, setTopics] = useState('')
    const [synonyms, setSynonyms] = useState([]);
    const [antonyms, setAntonyms] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [picture, setPicture] = useState('');

    const handleImageUpload = (name) => {
        setPicture(name);
    }
    const handleLevelChange = (type) => {
        setLevel(type);
    }
    const handleTypeChange = (type) => {
        setType(type);  // Cập nhật kiểu từ đã chọn trong state của component cha
      };

    const handleWordSelection = (labels) => {
        setSynonyms(labels); // Cập nhật trạng thái với từ đã chọn
    }

    const handleWordSelectionA = (labels) => {
        setAntonyms(labels); // Cập nhật trạng thái với từ đã chọn
    }

    const resetForm = () => {
        setWord("");
        setMean("");
        setExamples("");
        setSynonyms([]);
        setAntonyms([]);
        setLevel("");
        setIsChecked(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const WordItem = {
            word,
            mean,
            type,
            level,
            phonetic,
            examples,
            picture,
            specialty,
            topics,
            synonyms,
            antonyms,
            note,
            isChecked,
        };

        console.log(WordItem);
        alert('Đã thêm từ vựng');
        resetForm();
        // Send vocabulary item to the server
        /*fetch('/api/vocabulary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vocabularyItem),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Vocabulary item added successfully!');
                setWord('');
                setMeaning('');
                setExampleSentence('');
            })
            .catch((error) => {
                console.error('Error adding vocabulary:', error);
                alert('Failed to add vocabulary.');
            });*/
    };

    return (
        <div className='page'>
        <div className='navbar'><Navbar/></div>
        <div className='sbmc'>
            <div><Sidebar/></div>
            <div style={{overflowY: "scroll", flexGrow: "1", maxHeight: "78vh", padding: "15px 10px"}}>
                <form onSubmit={handleSubmit} className="form">

                    <div className="form-group">
                        <label>TÊN TỪ VỰNG</label>
                        <input 
                            type="text" 
                            value={word} 
                            onChange={(e) => setWord(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>NGHĨA CỦA TỪ VỰNG</label>
                        <input 
                            type="text" 
                            value={mean} 
                            onChange={(e) => setMean(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>LOẠI TỪ</label>
                        <WordTypeSelector onTypeChange={handleTypeChange}/>
                    </div>

                    <div className="form-group">
                        <label>CẤP ĐỘ</label>
                        <LevelSelector onTypeChange={handleLevelChange}/>
                    </div>

                    <div className="form-group">
                        <label>PHIÊN ÂM</label>
                        <input 
                            type="text" 
                            value={phonetic} 
                            onChange={(e) => setPhonetic(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC VÍ DỤ SỬ DỤNG</label>
                        <input 
                            type="text" 
                            value={examples} 
                            onChange={(e) => setExamples(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>HÌNH ẢNH MINH HOẠ</label>
                        <ImageUploader onImageUpload={handleImageUpload}/>
                    </div>

                    <div className="form-group">
                        <label>CHUYÊN NGÀNH</label>
                        <input 
                            type="text" 
                            value={specialty} 
                            onChange={(e) => setSpecialty(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC CHỦ ĐỀ LIÊN QUAN</label>
                        <input 
                            type="text" 
                            value={topics} 
                            onChange={(e) => setTopics(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC TỪ ĐỒNG NGHĨA</label>
                        <WordSelector onChange={handleWordSelection}/>
                    </div>

                    <div className="form-group">
                        <label>CÁC TỪ TRÁI NGHĨA</label>
                        <WordSelector onChange={handleWordSelectionA}/>
                    </div>

                    <div className="form-group">
                        <label>GHI CHÚ</label>
                        <textarea 
                            value={note} 
                            onChange={(e) => setNote(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    <div className="form-group" style={{display: "flex"}}>
                            <label>
                                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                                Đã Kiểm Tra
                            </label>
                    </div>
                    <button type="submit" className="btn">Xác nhận</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ContentAddPage;