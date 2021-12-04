# fs-rename

npm cli package to rename files and folders

## Cli examples

-   `fs-rename --to=kebab` change file and folder names to kebab case:
-   `fs-rename --to=snake --ignore="node_modules,tests"` names to snake case and ignore 2 dirs

## Options

| Options | Description             | Values              | Default value           | Required |
| ------- | ----------------------- | ------------------- | ----------------------- | -------- |
| to      | to what case rename     | kebab, snake, camel |                         | +        |
| ignore  | what directories ignore | dir names           | "coverage,node_modules" | -        |
