package com.rps.redofile;

import com.rps.core.Player;
import com.rps.core.PlayerRepository;

import java.util.List;
import java.util.stream.Collectors;


public class RedofilePlayerRepository implements PlayerRepository {


    public RedofilePlayerRepository(  ){

    }

    @Override
    public List<Player> findAll() {
        return null;
    }

    @Override
    public Player findById(int id) {
        return null;
    }

    @Override
    public Player save(Player player) {
        return player;
    }
}
