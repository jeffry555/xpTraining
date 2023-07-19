package com.rps.core;

import java.util.List;

public class DefaultCreateInitialPlayersUseCase implements CreateInitialPlayersUseCase {

    private PlayerRepository playerRepository;

    public DefaultCreateInitialPlayersUseCase(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public List<Player> execute() {
        playerRepository.save( new Player( "Wonder Woman", 1));
        playerRepository.save( new Player( "Iron Man", 2));
        playerRepository.save( new Player( "Wolverine", 3));
        playerRepository.save( new Player( "Cat Woman", 4));
        playerRepository.save( new Player( "Superman", 5));
        playerRepository.save( new Player( "Black Panther", 6));
        playerRepository.save( new Player( "Captain Marvel", 7));
        playerRepository.save( new Player( "Deadpool", 8));
        return playerRepository.findAll();
    }
}
