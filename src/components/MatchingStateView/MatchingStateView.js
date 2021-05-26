import React from 'react';
import { MatchingStateViewStyled, MatchingState, MatchingStartButton } from './MatchingStateView.styles';

const MatchingStateView = () => 
    <MatchingStateViewStyled>
        <MatchingState>현재 30명이 매칭을 기다리고 있어요!</MatchingState>
        <MatchingStartButton>매칭 신청하기 +</MatchingStartButton>
    </MatchingStateViewStyled>;

export default MatchingStateView;
