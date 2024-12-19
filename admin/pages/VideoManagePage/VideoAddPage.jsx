import React, { useState } from 'react';
import LevelSelector from '../../components/LevelSelector';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function VideoAddPage() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [html, setHtml] = useState("");

    const handleDateChange = (event) => {
        setHtml(event.target.value);
    };

    const handleVideoUpload = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        /*if (!video) {
            alert('Please upload a video!');
            return;
        }

                                <input 
                            type="file" 
                            accept="video/*" 
                            onChange={handleVideoUpload} 
                            required
                        />
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('video', video);*/
        
        const data = {
            title,
            desc,
            html,
        }

        console.log(data);
        // Send formData to the server
        /*fetch('/api/videos', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Video uploaded successfully!');
                setTitle('');
                setContent('');
                setVideo(null);
            })
            .catch((error) => {
                console.error('Error uploading video:', error);
                alert('Failed to upload video.');
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
                        <label>TIÊU ĐỀ:</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>MIÊU TẢ:</label>
                        <textarea 
                            value={desc} 
                            onChange={(e) => setDesc(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>LINK URL:</label>
                    </div>
                    <div className="form-group">
                        <label>NGÀY TẢI LÊN:</label>
                        <input type="date" id='date' value={html} onChange={handleDateChange} />
                    </div>
                    <div className="form-group">
                        <label>NGÔN NGỮ</label>
                        <LevelSelector/>
                    </div>
                    <button type="submit" className="btn">Upload</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default VideoAddPage;