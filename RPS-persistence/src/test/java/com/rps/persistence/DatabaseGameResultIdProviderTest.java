package com.rps.persistence;

import com.rps.core.GameResultIdProvider;
import com.rps.core.GameResultIdProviderTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@ExtendWith(SpringExtension.class)
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class DatabaseGameResultIdProviderTest extends GameResultIdProviderTest {

    @Autowired
    DatabaseGameResultIdProvider databaseGameResultIdProvider;

    @Override
    protected GameResultIdProvider getGameResultIdProvider() {
        return databaseGameResultIdProvider;
    }
}
