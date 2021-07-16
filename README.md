# Simple Thread Technical Exercise

This repository is a container for the technical exercise given to me for my job application to Simple Thread. It is written in Javascript and test with Jest.

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

## Type definitions

```
Project: {
    cityCost: bool (true is high cost | false is low cost);
    startDate: string (in month/day/year format);
    endDate: string (in month/day/year format);
}
```

```
Set: Projects[]
```

## Sets

### Set 1

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
