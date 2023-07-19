package com.rps.core;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

public class DefaultCreateInitialPlayersUseCaseTest {

    DefaultCreateInitialPlayersUseCase defaultCreateInitialPlayers;
    InMemoryPlayerRepository playerRepository;

    @BeforeEach
    public void setup(){
        playerRepository = new InMemoryPlayerRepository();
        defaultCreateInitialPlayers = new DefaultCreateInitialPlayersUseCase(playerRepository);


    }

    @Test
    public void execute_returnsPlayers(){

        Set<Player> expected = new HashSet<>();
        expected.add( new Player( "Wonder Woman", 1));
        expected.add( new Player( "Iron Man", 2));
        expected.add( new Player( "Wolverine", 3));
        expected.add( new Player( "Cat Woman", 4));
        expected.add( new Player( "Superman", 5));
        expected.add( new Player( "Black Panther", 6));
        expected.add( new Player( "Captain Marvel", 7));
        expected.add( new Player( "Deadpool", 8));

        List<Player> players = defaultCreateInitialPlayers.execute();

        assertEquals( expected.size(), players.size() );
        assert( expected.equals( new HashSet<>( players )) );


        players = playerRepository.findAll();

        assertEquals( expected.size(), players.size() );
        assert( expected.equals( new HashSet<>( players )) );

    }
}
