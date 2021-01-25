package com.rps.core;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public abstract class GameResultIdProviderTest {

    GameResultIdProvider gameResultIdProvider;

    protected abstract GameResultIdProvider getGameResultIdProvider();

    @Before
    public void setup() { gameResultIdProvider = getGameResultIdProvider(); }

    @Test
    public void returnsSequence(){
        int first = gameResultIdProvider.getId();
        int second = gameResultIdProvider.getId();
        int third = gameResultIdProvider.getId();

        assertEquals( (first + 1), second );
        assertEquals( (second + 1), third );
    }
}
