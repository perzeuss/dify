import { debounce } from 'lodash'

import { useEdgesInteractions } from './use-edges-interactions'
import { useNodesInteractions } from './use-nodes-interactions'
import { usePanelInteractions } from './use-panel-interactions'
import { useSelectionInteractions } from './use-selection-interactions'
import { useWorkflow } from './use-workflow'
import { useWorkflowStartRun } from './use-workflow-start-run'

export const useWorkflowEvents = () => {
  const edgesInteractions = useEdgesInteractions()
  const nodesInteractions = useNodesInteractions()
  const panelInteractions = usePanelInteractions()
  const selectionInteractions = useSelectionInteractions()
  const workflow = useWorkflow()
  const workflowStartRun = useWorkflowStartRun()

  const wrappedEdgesInteractions = Object.entries(edgesInteractions).reduce((acc, [key, value]) => {
    acc[key] = eventMiddleware(value, key)
    return acc
  }, {} as any)

  const wrappedNodesInteractions = Object.entries(nodesInteractions).reduce((acc, [key, value]) => {
    acc[key] = eventMiddleware(value, key)
    return acc
  }, {} as any)

  const wrappedPanelInteractions = Object.entries(panelInteractions).reduce((acc, [key, value]) => {
    acc[key] = eventMiddleware(value, key)
    return acc
  }, {} as any)

  const wrappedSelectionInteractions = Object.entries(selectionInteractions).reduce((acc, [key, value]) => {
    acc[key] = eventMiddleware(value, key)
    return acc
  }, {} as any)

  const wrappedWorkflow = Object.entries(workflow).reduce((acc, [key, value]) => {
    acc[key] = eventMiddleware(value, key)
    return acc
  }, {} as any)

  const wrappedWorkflowStartRun = Object.entries(workflowStartRun).reduce((acc, [key, value]) => {
    acc[key] = eventMiddleware(value, key)
    return acc
  }, {} as any)

  return {
    ...(wrappedEdgesInteractions as ReturnType<typeof useEdgesInteractions>),
    ...(wrappedNodesInteractions as ReturnType<typeof useNodesInteractions>),
    ...(wrappedPanelInteractions as ReturnType<typeof usePanelInteractions>),
    ...(wrappedSelectionInteractions as ReturnType<typeof useSelectionInteractions>),
    ...(wrappedWorkflow as ReturnType<typeof useWorkflow>),
    ...(wrappedWorkflowStartRun as ReturnType<typeof useWorkflowStartRun>),
  }
}
const debouncedLog = debounce(console.log, 300)

function eventMiddleware(fn: Function, name: string) {
  return function (...args: any[]) {
    switch (name) {
      // add custom logic for specific events
      default:
        debouncedLog(name, args)
        break
    }
    return fn(...args)
  }
}
