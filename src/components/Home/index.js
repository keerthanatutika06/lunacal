import React,{ Component } from 'react';

import './index.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'about',
            imagesList: [
                { id: 1, src: '/images/image1.jpg' },
                { id: 2, src: '/images/image2.jpeg' },
                { id: 3, src: '/images/image3.jpg' },
                { id: 4, src: '/images/image4.jpg' },
                { id: 5, src: '/images/image5.jpeg' },
                { id: 6, src: '/images/image6.jpg' },
            ],
        };
    }

    setActiveTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    scrollImages = (direction) => {
        const container = document.getElementById('image-container');
        const scrollAmount = 300; 
    
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    onAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImage = {
                    id: Date.now(),  
                    src: reader.result
                };
                this.setState(prevState => ({
                    imagesList: [...prevState.imagesList, newImage]
                }));
            };
            reader.readAsDataURL(file);
        }
    }
    
    renderContent = () => {
        const {activeTab} = this.state
        switch(activeTab){
            case 'about':
                return <p class = "content">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br/><br/>

                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
            case 'experience':
                return <p class = "content">I have 5 years of experience in sales and have been working at Salesforce for the past 3 years. I've been able to close 50 deals in the past 6 months, and I'm looking forward to closing more deals in the future. I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I've also...</p>
            case 'recommended':
                return <p class = "content">I would recommend the following products to you based on your previous purchases:<br/><br/>
                <b>1. Salesforce CRM</b><br/>
                Salesforce CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.<br/><br/>
                
                <b>2. HubSpot CRM</b><br/>
                HubSpot CRM is a free customer relationship management software that helps businesses manage their sales, marketing, and customer service<br/><br/>
                
                <b>3. Zoho CRM</b><br/>
                Zoho CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.<br/></p>
            default:
                return null
        }
    }
    
    render(){
    const {activeTab,imagesList} = this.state
    return(
        <div class="app-container">
        <div class="section1">
            <div class="side-bar">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQdSURBVHgBlVXdThtHFJ5drCjKDcsTdPMEuE8Q5wEqiCr1Jqqw1YIgTepdqUBJiDyGFtUQ6nVIA6Vqbas/pL0BLqr0qpgnCLxAun2C2FGrwO6cM/3GKQivbUKOZGnH55zv/H1zxhLnSLW67Ygrl/KaOcOaXSbtCqE1EbdwPsD3TnT0764/lQv7YVg9gbeeusLWVa05o7UWzCwQpMnmpxln7eDsaCPQKaa6fURF3+8O1BWg/tsfeUBITewA7AXSfaiUqE3lbnQ4lzd/TtvM14jZI63fQdSWYpZz+Y8rfQNUf31aQErSZAXw4vjNESkuIMtr3xeY4Ifq0D45/9lUsStA9cnveS10mRS1tMXXJ27eOBBvIV+tbgwrzQ20b9DSOnd/9nb9NEB1a9slHniGrNGWgfTkh+8dJgHKa9WMtu1h1CZ0JA6n/VwjaSOXv0kLpmeopmnH+l0p/dA2ipitAjOZockkeHm96q6u1/d4wN4jzQEyDNimvaVg87ksr7sdAWY+OaA4LhLT4LEdl9sVrFe33YGUeI7e/T2Vff9qMquvH9f/Yq1dzKUBPu1QbGqgLNqdRqYhv4pMps2zPnNy5QVrco5bR0MpOI0qxRb6HyTBHzz6YQwscWFTm7nzUe6MqlIsrdVQ8RhdElmcO3xJxQHwpH0llbdZqxH0Xkex2E8GYKUzRKSRdT2p06R2ULUWxMNJXRRHdfgZm4wNvg/j0PInPuhiDVhxyBS3joUKk7qY9CCTshQGmtQFJRmaQZvqbQxkiJTqMjJy1x8PopeXr0p/Kjz5T8qyM7/4AOuDAvhiHqrSyxczwM0nN2VKwXoR/UTK3Gnw+S9W92KmDLIT5ioKtr3SwlzYy08pMutFpwwTYOmICwhsXbOLcGMDocRu6cuZRj9bVOiYNqVQZmi2peH02Vb0ElS7C/BwefFucJ7d+K3pNGxxaXUjFat4H7ctg2GMQVc8z7G08LknLiBY6BkQU6BLOzbZRwGZnjLn3+TozcqMNyNH32SHNubbs7Ve7drS95tEqsEo6d7iquzn5M8WR8CFP8GO7TvT96/1s8tOfIrNSi4rqtU2Nl7vIuuYc6BUC7MoTMvldC9HraIWs7KwbbWlepMiO34Ly46leZgsona7T9f1XKHkYShlo0SN11eW7nVdvNveHNrDzUdBqdELXLNlFqKDIN5PtW8rHQGMzMwvFdA/kwEGpOTD5YVzh94G9jyHX0Z4S0T7wTH+v9Q2ux+cE0Gv8+ihxLJyEMhs0kp8HO9/93ilo6Ls5KTLkT0GhDxmM6RZYZaiuPXjZgeFez76YIsbxxHeCM62n0/cSNDOPPgtfn0eBBeH/v82vGyQZeWe1DbCJFbPACcy6c26pBjs4VFsxmEsLwdgFkBDxAwN8D/icmWnFjT7YfwH/hsbTyeuFScAAAAASUVORK5CYII=" alt="vector"/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAfCAYAAAD9cg1AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7VZBTsJAFP1/OprGmDjeoDcQbiALEzFKuoBzqCfwDB7BrUI0iMKO3gC8QY9QXBgM7f9O66ZAp20aYlz0JU2mv++/NzPJmym2r7pTRDgFI9D/+lw1bQXKIjljAGViMoM3fu230jWZL560OfahbGDIioVZPJlKhpaAkkBkBRVQ2qAqaoN/YIAAQRkisfCLOKwzs1mTkQibEErH1CQkBpPh0zwen192W5CDpVzNtwyWegU2kmNqojA1c6mfKJuLjIH9m/K1HZEHtDfTXx0wQe/hmdtrWjrJgmAKKIw8JBmLH6fLIj4KoACJeM4qU9hKe52D2mAHBvE1V8AJQIb+vkUvWUdBGiW0dg9sd3rXiNQwETiCxXg0uInHF53uXV7qkS3vbfj4sFbTTQwFIIIWAisU+FzEfR/2Mf1eX/q1wR8asL4SoQKkjvctCj4xC8NiMhp4ruuqb7Lu9Q/ukZFL+LFZ+wHdNHUpXiNvSwAAAABJRU5ErkJggg==" alt="boxes"/>
            </div>
            <div class="main-content">
                <nav className="navbar">
                <ul className="nav-links">
                                <button 
                                    className={`nav-menu ${activeTab === 'about' ? 'active' : ''}`} 
                                    onClick={() => this.setActiveTab('about')}
                                >
                                    About Me
                                </button>
                                <button 
                                    className={`nav-menu ${activeTab === 'experience' ? 'active' : ''}`} 
                                    onClick={() => this.setActiveTab('experience')}
                                >
                                    Experience
                                </button>
                                <button 
                                    className={`nav-menu ${activeTab === 'recommended' ? 'active' : ''}`} 
                                    onClick={() => this.setActiveTab('recommended')}
                                >
                                    Recommended
                                </button>
                            </ul>
            </nav>
            <div class = "button-content">
                {this.renderContent()}
            </div>
            </div>
            
        </div>
        <div class="section-break1">
        </div>
        <div class="section2">
            <div class="side-bar">
                <img class = "question-mark" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQdSURBVHgBlVXdThtHFJ5drCjKDcsTdPMEuE8Q5wEqiCr1Jqqw1YIgTepdqUBJiDyGFtUQ6nVIA6Vqbas/pL0BLqr0qpgnCLxAun2C2FGrwO6cM/3GKQivbUKOZGnH55zv/H1zxhLnSLW67Ygrl/KaOcOaXSbtCqE1EbdwPsD3TnT0764/lQv7YVg9gbeeusLWVa05o7UWzCwQpMnmpxln7eDsaCPQKaa6fURF3+8O1BWg/tsfeUBITewA7AXSfaiUqE3lbnQ4lzd/TtvM14jZI63fQdSWYpZz+Y8rfQNUf31aQErSZAXw4vjNESkuIMtr3xeY4Ifq0D45/9lUsStA9cnveS10mRS1tMXXJ27eOBBvIV+tbgwrzQ20b9DSOnd/9nb9NEB1a9slHniGrNGWgfTkh+8dJgHKa9WMtu1h1CZ0JA6n/VwjaSOXv0kLpmeopmnH+l0p/dA2ipitAjOZockkeHm96q6u1/d4wN4jzQEyDNimvaVg87ksr7sdAWY+OaA4LhLT4LEdl9sVrFe33YGUeI7e/T2Vff9qMquvH9f/Yq1dzKUBPu1QbGqgLNqdRqYhv4pMps2zPnNy5QVrco5bR0MpOI0qxRb6HyTBHzz6YQwscWFTm7nzUe6MqlIsrdVQ8RhdElmcO3xJxQHwpH0llbdZqxH0Xkex2E8GYKUzRKSRdT2p06R2ULUWxMNJXRRHdfgZm4wNvg/j0PInPuhiDVhxyBS3joUKk7qY9CCTshQGmtQFJRmaQZvqbQxkiJTqMjJy1x8PopeXr0p/Kjz5T8qyM7/4AOuDAvhiHqrSyxczwM0nN2VKwXoR/UTK3Gnw+S9W92KmDLIT5ioKtr3SwlzYy08pMutFpwwTYOmICwhsXbOLcGMDocRu6cuZRj9bVOiYNqVQZmi2peH02Vb0ElS7C/BwefFucJ7d+K3pNGxxaXUjFat4H7ctg2GMQVc8z7G08LknLiBY6BkQU6BLOzbZRwGZnjLn3+TozcqMNyNH32SHNubbs7Ve7drS95tEqsEo6d7iquzn5M8WR8CFP8GO7TvT96/1s8tOfIrNSi4rqtU2Nl7vIuuYc6BUC7MoTMvldC9HraIWs7KwbbWlepMiO34Ly46leZgsona7T9f1XKHkYShlo0SN11eW7nVdvNveHNrDzUdBqdELXLNlFqKDIN5PtW8rHQGMzMwvFdA/kwEGpOTD5YVzh94G9jyHX0Z4S0T7wTH+v9Q2ux+cE0Gv8+ihxLJyEMhs0kp8HO9/93ilo6Ls5KTLkT0GhDxmM6RZYZaiuPXjZgeFez76YIsbxxHeCM62n0/cSNDOPPgtfn0eBBeH/v82vGyQZeWe1DbCJFbPACcy6c26pBjs4VFsxmEsLwdgFkBDxAwN8D/icmWnFjT7YfwH/hsbTyeuFScAAAAASUVORK5CYII=" alt="vector"/>
                <img class ="grid-box"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAfCAYAAAD9cg1AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7VZBTsJAFP1/OprGmDjeoDcQbiALEzFKuoBzqCfwDB7BrUI0iMKO3gC8QY9QXBgM7f9O66ZAp20aYlz0JU2mv++/NzPJmym2r7pTRDgFI9D/+lw1bQXKIjljAGViMoM3fu230jWZL560OfahbGDIioVZPJlKhpaAkkBkBRVQ2qAqaoN/YIAAQRkisfCLOKwzs1mTkQibEErH1CQkBpPh0zwen192W5CDpVzNtwyWegU2kmNqojA1c6mfKJuLjIH9m/K1HZEHtDfTXx0wQe/hmdtrWjrJgmAKKIw8JBmLH6fLIj4KoACJeM4qU9hKe52D2mAHBvE1V8AJQIb+vkUvWUdBGiW0dg9sd3rXiNQwETiCxXg0uInHF53uXV7qkS3vbfj4sFbTTQwFIIIWAisU+FzEfR/2Mf1eX/q1wR8asL4SoQKkjvctCj4xC8NiMhp4ruuqb7Lu9Q/ukZFL+LFZ+wHdNHUpXiNvSwAAAABJRU5ErkJggg==" alt="boxes"/>
            </div>

            <div class="gallery-section-content">
        <div class="nav-bar-buttons-container">
            <button disabled class="gallery-button"><span class="gallery-label">Gallery</span></button>
            <div class="add-image-buttons-container">
            <button className="add-image-button" onClick={() => this.fileInput.click()}>
    <span className="add-image-label">+ ADD IMAGE</span>
    <input 
        type="file" 
        accept="image/*" 
        onChange={this.onAddImage} 
        style={{ display: 'none' }} 
        ref={(input) => this.fileInput = input} 
    />
</button>

            <button class="left-arrow-button" onClick={() => this.scrollImages('left')}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="left-arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                </svg>
            </button>
          
            <button class="left-arrow-button" onClick={() => this.scrollImages('right')}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="left-arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </button>
        </div>
    </div>

 
    <ul class="images-container" id="image-container">
    {imagesList.map((image) => (
            <div key={image.id} className="image-container">
                    <img className="image" src={image.src} alt="uploaded" />
                        </div>
            ))}
    </ul>
</div>

        </div>
        <div class="section-break2">
        </div>
    </div>
    )
}
}

export default Home