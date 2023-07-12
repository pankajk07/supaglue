import SyncRunsTable from '@/components/logs/SyncRunsTable';
import { useSyncRuns } from '@/hooks/useSyncRuns';
import Header from '@/layout/Header';
import { getServerSideProps } from '@/pages/applications/[applicationId]';
import { Box } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

export { getServerSideProps };

export default function Home() {
  const [currentCursor, setCurrentCursor] = useState<string | undefined>(undefined);
  const { syncRuns, isLoading } = useSyncRuns(currentCursor);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNextPage = () => {
    if (syncRuns?.next) {
      setCurrentCursor(syncRuns.next);
    }
  };

  const handlePreviousPage = () => {
    if (syncRuns?.previous) {
      setCurrentCursor(syncRuns.previous);
    }
  };

  return (
    <>
      <Head>
        <title>Supaglue Management Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header title="Sync Runs" onDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          <SyncRunsTable
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            rowCount={syncRuns?.totalCount ?? 0}
            data={syncRuns?.results ?? []}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </>
  );
}
