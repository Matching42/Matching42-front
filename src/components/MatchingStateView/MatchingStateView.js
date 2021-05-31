import React from 'react';
import { MatchingStateViewStyled, MatchingState, MatchingStartButton } from './MatchingStateView.styles';

const MatchingStateView = ({ waitList, user }) => (
  <MatchingStateViewStyled>
    <MatchingState>
      현재 <MatchingState.Strong>{waitList.size}명</MatchingState.Strong>이 <MatchingState.Strong>매칭</MatchingState.Strong>을 기다리고 있어요!
    </MatchingState>
    <MatchingStartButton>{user.waitMatching ? '매칭 대기 중' : '매칭 신청하기 +'}</MatchingStartButton>
  </MatchingStateViewStyled>
);

export default MatchingStateView;
