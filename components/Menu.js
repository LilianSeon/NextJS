
const Menu = () => {

    return(
        <div className="" style={{paddingBottom:20}}>
            <div className="ui secondary pointing menu">
                <a className="item active">
                    Home
                </a>
                <a className="item">
                    Messages
                </a>
                <a className="item">
                    Friends
                </a>
                <div className="right menu">
                    <a className="ui item">
                    Logout
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Menu;