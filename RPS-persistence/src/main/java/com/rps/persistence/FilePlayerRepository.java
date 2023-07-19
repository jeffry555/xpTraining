package com.rps.persistence;

import com.rps.core.Player;
import com.rps.core.PlayerRepository;

import java.util.ArrayList;
import java.util.List;

public class FilePlayerRepository implements PlayerRepository {

    @Override
    public List<Player> findAll() {
        return new ArrayList<>();
    }

    @Override
    public Player findById(int id) {
        return null;
    }

    @Override
    public Player save(Player player) {
        return null;
    }
}
