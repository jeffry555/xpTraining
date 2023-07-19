package com.rps.core;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public abstract class GameResultIdProviderTest {

    GameResultIdProvider gameResultIdProvider;

    protected abstract GameResultIdProvider getGameResultIdProvider();


    @Test
    public void returnsSequence(){
        gameResultIdProvider = getGameResultIdProvider();
        int first = gameResultIdProvider.getId();
        gameResultIdProvider = getGameResultIdProvider();
        int second = gameResultIdProvider.getId();
        gameResultIdProvider = getGameResultIdProvider();
        int third = gameResultIdProvider.getId();

        assertEquals( (first + 1), second );
        assertEquals( (second + 1), third );
    }
}
