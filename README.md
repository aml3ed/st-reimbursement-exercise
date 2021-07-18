# Simple Thread Technical Exercise

This repository is a container for the technical exercise given to me for my job application to Simple Thread. It is written in Typescript and tested with Jest.

## Goal

Given a set of _projects_, calculate the reimbursement amount for the _set_.

## Rules

- First and last days of projects/sets are _travel_ days
- Middle days are _full_ days
- Gap days should not be billed
- Days on the ends of gaps between projects are _travel_ days
- Projects that touch or overlap days are _full_ days
- Days are only ever counted once
- Projects are in either high or low cost cities
- Days should be counted to maximize reimbursement total

## Rates

|           |      full |    travel |
| --------- | --------: | --------: |
| high cost | $85 / day | $55 / day |
| low cost  | $75 / day | $45 / day |

# Running the code

To run the project and calculate reimbursement for the 4 given sets in the `/data` folder, first install the necessary dependencies.

```
npm install
```

**_Note_**: If you get an error that dependencies couldn't be installed correctly, make sure the version of Node you're running is `v14.16.0` or later. You can do this easily if you have `nvm` installed by running `nvm i`.

### Run using Jest

If you'd like to just run the tests in the test-file using Jest, you can run:

```
npm run test
```

or

```
jest
```

### Run using build script

If you'd like to just see a printout of the results from testing the given data-sets, I created a build script that does just that. You can run it with the following command:

```
npm run calc
```

# Related Info

## Type definitions

```
ProjectData: {
    cityCost: bool (true is high cost | false is low cost);
    startDate: string (in month/day/year format);
    endDate: string (in month/day/year format);
}
```

## Testing Sets

### Set 1

Should calculate to **165**

```
[
    {
        cityCost: false,
        startDate: 9/1/15,
        endDate: 9/3/15
    }
]
```

### Set 2

Should calculate to **620**

```
[
    {
        cityCost: false,
        startDate: 9/1/15,
        endDate: 9/1/15
    },
    {
        cityCost: true,
        startDate: 9/2/15,
        endDate: 9/6/15
    },
    {
        cityCost: false,
        startDate: 9/6/15,
        endDate: 9/8/15
    }
]
```

### Set 3

Should calculate to **475**

```
[
    {
        cityCost: false,
        startDate: 9/1/15,
        endDate: 9/3/15
    },
    {
        cityCost: true,
        startDate: 9/5/15,
        endDate: 9/7/15
    },
    {
        cityCost: true,
        startDate: 9/8/15,
        endDate: 9/8/15
    }
]
```

### Set 4

Should calculate to **215**

```
[
    {
        cityCost: false,
        startDate: 9/1/15,
        endDate: 9/1/15
    },
    {
        cityCost: false,
        startDate: 9/1/15,
        endDate: 9/1/15
    },
    {
        cityCost: true,
        startDate: 9/2/15,
        endDate: 9/2/15
    },
    {
        cityCost: true,
        startDate: 9/2/15,
        endDate: 9/3/15
    }
]
```
