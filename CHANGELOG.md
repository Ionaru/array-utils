# Changelog
All notable changes to the array-utils project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- objectsArrayToObject now takes a selector function, using a string as key is deprecated.

## [3.0.0] - 2020-01-24
### BREAKING CHANGES
- Dropped support for Node.js 8.

### Added
- uniquifyObjectsArray function.
- groupArrayByObjectProperty function.

## [2.0.0] - 2019-11-14
### BREAKING CHANGES
- Dropped support for Node.js 11.

### Changed
- Use Set to make an array unique.

## [1.2.0] - 2019-08-19
### Added
- Ability to give starting number and step amount to generateNumbersArray.

## [1.1.0] - 2019-05-09
### Added
- Support for Node.js 12.
- Better typings for objectsArrayToObject.
- Another test for objectsArrayToObject.

### Changed
- Always deploy with active LTS version of Node.js.

## [1.0.0] - 2019-04-16
### Added
- Initial code.
- Setup for this project.

[Unreleased]: https://github.com/Ionaru/array-utils/compare/3.0.0...HEAD
[3.0.0]: https://github.com/Ionaru/array-utils/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Ionaru/array-utils/compare/1.2.0...2.0.0
[1.2.0]: https://github.com/Ionaru/array-utils/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/Ionaru/array-utils/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/Ionaru/array-utils/compare/971ba24...1.0.0
