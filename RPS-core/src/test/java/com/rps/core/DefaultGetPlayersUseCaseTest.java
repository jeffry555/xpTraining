package com.rps.core;

import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class DefaultGetPlayersUseCaseTest {

    DefaultGetPlayersUseCase defaultGetPlayersUseCase;
    InMemoryPlayerRepository playerRepository;

    @Before
    public void setup(){
        playerRepository = new InMemoryPlayerRepository();
        defaultGetPlayersUseCase = new DefaultGetPlayersUseCase(playerRepository);

        playerRepository.save( new Player("Wonder Woman", 41));
        playerRepository.save( new Player("Black Panther", 42));
    }

    @Test
    public void execute_returnsPlayers(){

        List<Player> players = defaultGetPlayersUseCase.execute();

        assertEquals( 2, players.size() );
        assertEquals( "Wonder Woman", players.get(0).getName());
        assertEquals( "Black Panther", players.get(1).getName());
        assertEquals( 41, players.get(0).getId());
        assertEquals( 42, players.get(1).getId());

    }

}
