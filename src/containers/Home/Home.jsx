import React from 'react';
import { connect } from 'react-redux'
import { SideBar } from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent'
import * as videoActions from "../../store/actions/video";
import { bindActionCreators } from 'redux';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import './Home.scss';


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SideBar />
                <HomeContent />
            </React.Fragment>
        );
    }

    componentDidMount() {
        if (this.props.youtubeLibraryLoaded) {
            this.fetchCategoriesAndMostPopularVideos();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
            this.fetchCategoriesAndMostPopularVideos();
        }
    }
    fetchCategoriesAndMostPopularVideos() {
        this.props.fetchMostPopularVideos();
        this.props.fetchVideoCategories();
    }
}



const mapStateToProps = (state) => {
    return {
        youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    const fetchMostPopularVideos = videoActions.mostPopular.request;
    const fetchVideoCategories = videoActions.categories.request;
    return bindActionCreators({ fetchMostPopularVideos, fetchVideoCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
