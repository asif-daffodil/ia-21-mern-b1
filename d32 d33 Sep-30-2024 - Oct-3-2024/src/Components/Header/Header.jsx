import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <div>
            <h2 className={`${HeaderCSS.seminarChole} ${HeaderCSS.seminarBondho} text-center py-5 bg-stone-300`}>This is a header</h2>
        </div>
    );
};

export default Header;