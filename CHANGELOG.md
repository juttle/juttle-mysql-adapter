# Change Log
This file documents all notable changes to the juttle-mysql-adapter. The release numbering uses [semantic versioning](http://semver.org).

## 0.4.0
Released 2016-02-18

### Major Changes
- `reduce -every` concurrent batch execution.
- Allow array of credentials. Change option `database` to `db`.
- Dynamically change credential object or database name using `id` or `db` option.
- Large dataset pagination over time bug-fix.

## 0.3.0
Released 2016-02-08

### Major Changes
- Unit tests refactored such that you can use mocha to run files directly
- Updated the dependencies to support the 0.4.0 juttle release.
- Updated to use new Adapter Read and Write API.

## 0.2.1
Released 2016-01-25

### Major Changes
- Updated the dependencies to support the 0.3.0 juttle release
- NOTICE: As part of the update to juttle 0.3.0, the configuration syntax for adapters changed from the name of the module ("juttle-mysql-adapter") to the type of the adapter ("mysql").
- Copyright updated

## 0.1.0
Released 2015-12-19

### Major Changes
- Initial release
