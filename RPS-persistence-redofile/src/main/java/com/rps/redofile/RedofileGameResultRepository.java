package com.rps.redofile;

import com.rps.core.*;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class RedofileGameResultRepository implements GameResultRepository {


    final PlayerRepository playerRepository;

    public RedofileGameResultRepository( RedofilePlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public GameResult save(GameResult gameResult) {
        return gameResult;
    }

    @Override
    public GameResult findById(int id) {


        return null;
    }

    @Override
    public List<GameResult> findAll() {
        Player player1 = new Player("Jane Smith", 1 );
        Player player2 = new Player("John Smith", 2 );
        GameResult gameResult = new GameResult(player1, player2, Outcome.P1_WINS, Throw.PAPER, Throw.ROCK, 1 );
        List<GameResult> ret = new ArrayList<GameResult>();
        ret.add( gameResult );
        return ret;
    }
}
