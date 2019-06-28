import React, {Component} from 'react';
import {setScroll} from "../redux/actions";
import {connect} from "react-redux";
import logo from '../logo.svg';

const   minImgWidth = 120,
        maxImgWidth = 160,

        minMenuPos = 0,
        maxMenuPos = 50;

class Header extends Component {

    state = {
        imgWidth: maxImgWidth,
        menuPos: maxMenuPos,
        opacity: 0
    };

    componentDidMount() {
        this.updateScroll(this.props);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.updateScroll(nextProps)
    }

    updateScroll = props => {
        const {scroll} = props;

        const opacity = scroll / 100;

        const width = (maxImgWidth - minImgWidth) * (100 - scroll) / 100;
        const imgWidth = minImgWidth + width;

        const pos = (maxMenuPos - minMenuPos) * (100 - scroll) / 100;
        const menuPos = minMenuPos + pos;


        this.setState({opacity, imgWidth, menuPos});
    };


    render() {
        const {imgWidth, menuPos, opacity} = this.state;
        return <div className="header" style={{backgroundColor: `rgba(255, 255, 255, ${opacity})`}}>
            <div className="img">
                <img src={logo} alt="React" style={{width: imgWidth}}/>
            </div>
            <div className="menu-section" style={{marginLeft: menuPos}}>
                <div className="item">Menu</div>
                <div className="item">Blog</div>
                <div className="item">Other</div>
                <div className="item">Last</div>
                <div className="item">Other item</div>
            </div>
        </div>
    }
}


const mapStateToProps = state => ({
    scroll: state.scroll,
});

const mapDispatchToProps = dispatch => ({
    setScroll: scroll => dispatch(setScroll(scroll)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
