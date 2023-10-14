import React from 'react';
interface SearchProps {
    searchbar: boolean
}
const SearchBox: React.FC<SearchProps> = (props) => {
    return (
        <>
            {props?.searchbar && (
                <div className="search-popup">
                    <div className="search-popup-container">

                        <form role="search" method="get" className="search-form" action="">
                            <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value="" name="s" />
                            <button type="submit" className="search-submit"><a href="#"><i className="icon icon-search"></i></a></button>
                        </form>

                        <h5 className="cat-list-title">Browse Categories</h5>

                        <ul className="cat-list">
                            <li className="cat-list-item">
                                <a href="shop.html" title="Men Jackets">Men Jackets</a>
                            </li>
                            <li className="cat-list-item">
                                <a href="shop.html" title="Fashion">Fashion</a>
                            </li>
                            <li className="cat-list-item">
                                <a href="shop.html" title="Casual Wears">Casual Wears</a>
                            </li>
                            <li className="cat-list-item">
                                <a href="shop.html" title="Women">Women</a>
                            </li>
                            <li className="cat-list-item">
                                <a href="shop.html" title="Trending">Trending</a>
                            </li>
                            <li className="cat-list-item">
                                <a href="shop.html" title="Hoodie">Hoodie</a>
                            </li>
                            <li className="cat-list-item">
                                <a href="shop.html" title="Kids">Kids</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
export default SearchBox;