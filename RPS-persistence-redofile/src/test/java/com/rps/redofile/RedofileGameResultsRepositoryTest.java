package com.rps.redofile;

import com.rps.core.GameResultRepository;
import com.rps.core.GameResultRepositoryTest;
import com.rps.core.PlayerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class RedofileGameResultsRepositoryTest extends GameResultRepositoryTest {


    RedofileGameResultRepository databaseGameResultRepository;

    RedofilePlayerRepository databasePlayerRepository;

    RedofileCleaner databaseCleaner;

    RedofileGameResultsRepositoryTest(){
        databasePlayerRepository = new RedofilePlayerRepository();
        databaseGameResultRepository = new RedofileGameResultRepository( databasePlayerRepository );
    }

    @BeforeEach
    public void cleanDB(){
        //databaseCleaner.deleteAllRows();
    }

    protected GameResultRepository getGameResultRepository() {
        return databaseGameResultRepository;
    }

    @Override
    protected PlayerRepository getPlayerRepository() {
        return databasePlayerRepository;
    }

    @Test
    public void canRunTest(){
        assertEquals( 1, 2 );
    }
}
