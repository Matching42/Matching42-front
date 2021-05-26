import React from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import { MatchingStateViewStyled, MatchingState, MatchingStartButton, Bold } from './MatchingStateView.styles';

const MatchingStateView = (props) => 
    <MatchingStateViewStyled>
        <MatchingState>
            현재 <Bold>{props.waitList.size}명</Bold>이 <Bold>매칭</Bold>을 기다리고 있어요!
        </MatchingState>
        <MatchingStartButton>
            {props.user.waitMatching ? '매칭 대기 중' : '매칭 신청하기 +'}
        </MatchingStartButton>
    </MatchingStateViewStyled>;

MatchingStateView.defaultProps = {
    waitList: {
        size: 30,
        cub3d: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee'],
        ft_printf: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee'],
        libasm: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee']
    },
    user: {
        waitMatching: false
    }
};

export default MatchingStateView;
