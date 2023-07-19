package com.rps.persistence;

import com.rps.core.PlayerRepository;
import com.rps.core.PlayerRepositoryTest;
import org.junit.jupiter.api.Disabled;

@Disabled("Remove this annotation when you are ready to implement this class")
public class FilePlayerRepositoryTest extends PlayerRepositoryTest {
    @Override
    protected PlayerRepository getPlayerRepository() {
        return new FilePlayerRepository();
    }
}
