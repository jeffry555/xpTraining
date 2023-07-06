package com.rps.redofile;

import com.rps.core.GameResultIdProvider;
import com.rps.core.GameResultIdProviderTest;
import org.junit.jupiter.api.extension.ExtendWith;


public class RedofileGameResultIdProviderTest extends GameResultIdProviderTest {


    RedofileGameResultIdProvider databaseGameResultIdProvider;

    @Override
    protected GameResultIdProvider getGameResultIdProvider() {
        return databaseGameResultIdProvider;
    }
}
