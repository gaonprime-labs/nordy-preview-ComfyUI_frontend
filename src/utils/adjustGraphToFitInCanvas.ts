export async function adjustGraphToFitInCanvas(app: any) {
  const nodes = app.graph._nodes
  const canvasRect = app.canvasEl.getBoundingClientRect()
  const canvasHeight = canvasRect.height
  const canvasWidth = canvasRect.width

  let minX = Number.MAX_VALUE,
    minY = Number.MAX_VALUE,
    maxX = -Number.MAX_VALUE,
    maxY = -Number.MAX_VALUE

  for (const node of nodes) {
    const pos = node.pos.slice()
    let nodeWidth = node.size[0]
    let nodeHeight = node.size[1]

    if (node.flags.collapsed && node.title) {
      const width = app.canvas.bgctx.measureText(node.title).width
      nodeWidth = Math.min(node.size[0], width + 60)
      nodeHeight = 30
    }

    minX = Math.min(minX, pos[0])
    minY = Math.min(minY, pos[1])
    maxX = Math.max(maxX, pos[0] + nodeWidth)
    maxY = Math.max(maxY, pos[1] + nodeHeight)
  }

  const graphWidth = maxX - minX
  const graphHeight = maxY - minY

  const scaleX = canvasWidth / graphWidth
  const scaleY = canvasHeight / graphHeight
  const scale = Math.min(scaleX, scaleY) * 0.95

  const graphCenterX = minX + graphWidth / 2
  const graphCenterY = minY + graphHeight / 2

  const canvasCenterX = canvasWidth / 2
  const canvasCenterY = canvasHeight / 2

  const offsetX = canvasCenterX / scale - graphCenterX
  const offsetY = canvasCenterY / scale - graphCenterY

  app.canvas.ds.scale = scale
  app.canvas.ds.offset = [offsetX, offsetY]

  app.canvas.setDirty(true, true)
}
