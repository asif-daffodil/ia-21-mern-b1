import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <div>
            <h2 className={`${HeaderCSS.seminarChole} ${HeaderCSS.seminarBondho}`}>This is a header</h2>
        </div>
    );
};

export default Header;