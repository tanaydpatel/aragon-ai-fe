import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ActionIcon,
  Anchor,
  AppShell,
  Box,
  Burger,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { RiGithubFill, RiLogoutCircleLine } from 'react-icons/ri';

import { REPO_LINK } from '../../constants';

// Dashboard Layout on all routes starting from "/dashboard"
function DashboardLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const isDesktop = useMediaQuery('(min-width: 48em)');



  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 80,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened },
      }}
      padding="md"
    >
      <AppShell.Header
        className="flex-row space-between align-center"
        px={isDesktop ? 'lg' : 'xs'}
      >
        <div className="flex-row">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="md"
          />
          <Text size="xl" fw={600} ml={isDesktop ? 0 : 10}>
            {isDesktop
              ? 'India Agriculture crop production'
              : 'Crop production'}
          </Text>
        </div>
        <div>
          <Anchor target="_blank" href={REPO_LINK} rel="noreferrer">
            <Tooltip label="View source code">
              <ThemeIcon variant="transparent" size="lg">
                <RiGithubFill size={26} />
              </ThemeIcon>
            </Tooltip>
          </Anchor>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack align="center" gap="xl">
          <Tooltip label="Logout">
            <ActionIcon variant="light" size="lg" onClick={logout}>
              <RiLogoutCircleLine size={18} />
            </ActionIcon>
          </Tooltip>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Box px={isDesktop ? 30 : 0}>
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default DashboardLayout;
