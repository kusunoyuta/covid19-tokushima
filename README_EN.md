# Tokushima(Unofficial) COVID-19 Task Force website

[![tokushima COVID-19 Task Force website](https://github.com/yutakusuno/covid19-tokushima/assets/56626111/14f82964-3702-4309-bb10-f431df13d581)](https://tokushima-covid19.netlify.com/)

### [日本語](./README.md) | [English](./README_EN.md)

## How to Contribute

All contributions are welcome!
Please check [How to contribute](./.github/CONTRIBUTING_EN.md) for details.

## Code of Conduct

Please check [Code of conduct for developers](./.github/CODE_OF_CONDUCT_EN.md) for details.

## License
This software is released under [the MIT License](./LICENSE.txt).

## For Developers

### How to Set Up Environments

- Required Node.js version: 10.19.0 or higher

**Use yarn**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### How to resolve `Cannot find module ****` error

**Use yarn**
```bash
$ yarn install
```

**Use docker**
```bash
$ docker-compose run --rm app yarn install
```

### Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.  
Please use the variable to detect which enviroinment is used at the runtime.

### Deployment to Staging & Production Environments

When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (https://tokushima-covid19.netlify.com/) will be also updated.

When `development` branch is updated, the HTML files will be automatically built onto `dev-pages` branch,
and then the development site (https://dev-covid19-tokushima.netlify.com/) will be also updated.

### Branch rules

Pull Request is allowed only for `development`.  
Please use the following naming rules for the branch when sending a Pull Request.

Feature implementation: feature/#{ISSUE_ID}-#{branch_title_name}  
Hotfix commit: hotfix/#{ISSUE_ID}-{branch_title_name}

#### Basic branch
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Development | development | http://dev-covid19-tokushima.netlify.com/ | base branch. Basically send a Pull Request here |
| Production | master | https://tokushima-covid19.netlify.com/ | Pull Requests other than Administrators are prohibited |

#### Branch used by the system
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Development site HTML | dev-pages | https://dev-tokushima-covid19.netlify.com/ | Location where statically built HTML is located |
| Production site HTML | production | https://tokushima-covid19.netlify.com/ | Location where statically built HTML is located |
