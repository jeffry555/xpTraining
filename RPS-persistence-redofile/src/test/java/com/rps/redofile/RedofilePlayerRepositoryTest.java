package com.rps.redofile;

import com.rps.core.PlayerRepository;
import com.rps.core.PlayerRepositoryTest;

public class RedofilePlayerRepositoryTest extends PlayerRepositoryTest {

    RedofilePlayerRepository databasePlayerRepository;

    @Override
    protected PlayerRepository getPlayerRepository() {
        return databasePlayerRepository;
    }
}
