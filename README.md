# hmtw-foundry
Foundry System for His Majesty The Worm. This project is unaffiliated with Joshua McCrowell or Exalted Funeral.

# Creating a Release

The His Majesty The Worm Foundry system updates are managed via releases. To update the system:

1. Increment the `version` value in `system.json` with the new major/minor/patch version as necessary.
1. Navigate to the [`hmtw-foundry` main branch](https://github.com/omarwhite/hmtw-foundry/tree/main).
    1. Click "Code" > "Download ZIP".
    1. Rename the zip file to `release.zip`.
    1. Save/locate a local copy of `system.json`.
1. Navigate to the [GitHub Releases](https://github.com/omarwhite/hmtw-foundry/releases) page and click "Draft a new release".
    1. Ensure the target is set to the `main` branch and create a new tag with the same version number used in the `system.json`.
    1. Use the tag (version number) as the release title and provide a brief description of the features added in the release.
    1. Attach the `system.json` and `release.zip` binaries you saved earlier.
    1. Click "Publish release".
1. In the Foundry setup page, click the refresh button ("Perform Update If Available") on the system.
1. The next time you launch your world, Foundry will alert you that the world needs to be migrated to a new system version and prompt you to create a backup.
    1. If it's a real world, take a backup. Click "Migrate".
    1. If it's a test world, there's probably no need to backup. Uncheck the box and click "Migrate".