import React from 'react'
    import '../../componentStyling';
    import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
    
    
    const Navbar = () => {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white ">
                <div className="container">
                    <a class="navbar-brand" href=""><img src="https://imgeng.jagran.com/images/2021/jan/Myntra-805x530-1-700x4611611985286383.jpg" alt="Mynta" className="coco mr-5" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a class="nav-link mr-2" href="#">MEN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-2" href="#">WOMEN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-2" href="#">KIDS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-2" href="#">HOME & LIVING</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-2" href="#">OFFERS</a>
                            </li>
    
                        </ul>
                        {/* <div className='sidebar_search'>
                            <div className='sidebar_searchContainer'>
                                <SearchOutlinedIcon />
                                <input type='text' placeholder='Search for products brands and more' />
                            </div>
                        </div> */}
    
                        <div class="form-group has-search">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search for Products Branda and More" />
                        </div>
                    </div>
                </div>
    
            </nav>
        )
    }
    
    export default Navbar;