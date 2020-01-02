import React from 'react';
import Waypoint from 'react-waypoint-with-progress';
import { Loader } from 'semantic-ui-react';
import './infiniteScroll.scss';

export const InfiniteScroll = (props) => {
    return (
        <React.Fragment>
            {props.children}
            <Waypoint onEnter={props.bottomReachedCallback}>
                <div className='loader-container' >
                    <Loader active={props.showLoader} inline='centered' />
                </div>
            </Waypoint>
        </React.Fragment>
    );
}