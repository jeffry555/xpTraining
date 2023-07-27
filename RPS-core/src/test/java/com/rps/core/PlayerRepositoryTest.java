package com.rps.core;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public abstract class PlayerRepositoryTest {

    PlayerRepository playerRepository;

    protected abstract PlayerRepository getPlayerRepository();

    @Test
    public void canGetPlayerList() {
        playerRepository = getPlayerRepository();
        playerRepository.save( new Player(  "Wonder Woman", 1));
        playerRepository.save( new Player( "Deadpool", 2));

        playerRepository = getPlayerRepository();
        List<Player> playerList = playerRepository.findAll();

        Set<Player> expected = new HashSet<>();
        expected.add( new Player( "Wonder Woman", 1));
        expected.add( new Player( "Deadpool", 2));

        assertEquals( expected.size(), playerList.size() );
        assert( expected.equals( new HashSet<>( playerList )) );

    }
}
