This repostiory is based on Material UI Table with sorting and selecting (https://material-ui.com/components/tables/#sorting-amp-selecting) as well as React Beautiful dnd (https://github.com/atlassian/react-beautiful-dnd).

It should support:
* flat rows
* nested rows (2 levels)
* deep rows (3 or more levels)

When sorting is enabled (try to sort by status or name) the Dnd should be disabled.

It should be possible to drag tasks (from anywhere in the task) both up and down. 

When dragging to the right (where possible depending of the task depth above it) then the task should become a subtask

When dragging to the left (where possible), then the task should be unsubtask

When a drag is successfully completed (and there is a change), after updating the internal state, make a call to the handle to notify of the change:
* path - the path of the task being moved
* toPath - the path to which the task is being moved to (/cl if it is at the top)
* position - the position within the parent (toPath)

We can provide additional data samples to help validate the implementation

