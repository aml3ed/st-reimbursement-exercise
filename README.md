# Simple Thread Technical Exercise

This repository is a container for the technical exercise given to me for my job application to Simple Thread. It is written in Javascript and test with Jest.

## Goal

Given a set of _projects_, calculate the reimbursement amount for the _set_.

## Rules

- First and last days of projects/sets are _travel_ days
- Middle days are _full_ days
- Days on the ends of gaps between projects are _travel_ days
- Projects that touch or overlap days are _full_ days
- Days are only ever counted once
- Projects are in either high or low cost cities

## Rates

| day type | high cost city | low cost city |
| -------- | -------------: | ------------: |
| full     |      $85 / day |     $75 / day |
| travel   |      $55 / day |     $45 / day |

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
