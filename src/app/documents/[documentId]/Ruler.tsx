import { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa"
import {useStorage,useMutation} from "@liveblocks/react"
const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
    const leftMar = useStorage((root)=>root.leftMargin) ?? 56
    const setleftMar = useMutation(({storage},position:number)=>{
        storage.set("leftMargin",position)
    },[])
    const rightMar = useStorage((root)=>root.rightMargin) ?? 56
    const setrightMar = useMutation(({storage},position:number)=>{
        storage.set("rightMargin",position)
    },[])

    const [dragLeft, setdragLeft] = useState(false)
    const [dragRight, setdragRight] = useState(false)
    const rulerRef = useRef<HTMLDivElement>(null);

    const handleLeft = () => {
        setdragLeft(true)
    }
    const handleRight = () => {
        setdragRight(true)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if ((dragLeft || dragRight) && rulerRef.current) {
            const container = rulerRef.current.querySelector("#ruler-container")
            if (container) {
                const containerReat = container.getBoundingClientRect()
                const RelativeX = e.clientX - containerReat.left
                const rowPosition = Math.max(0, Math.min(816, RelativeX))
                if (dragLeft) {
                    const maxLeftPost = 816 - rightMar - 100;
                    const newLeftPosition = Math.min(rowPosition, maxLeftPost);
                    setleftMar(newLeftPosition)
                } else if (dragRight) {
                    const maxRightPost = 816 - (leftMar + 100);
                    const newRightPosition = Math.max(816 - rowPosition, 0);
                    const constrainedRightPosition = Math.min(newRightPosition, maxRightPost)
                    setrightMar(constrainedRightPosition)
                }
            }
        }
    }

    const handleMouseUp = () => {
        setdragLeft(false);
        setdragRight(false)
    }

    const handleLeftDoubleClick = () => {
        setleftMar(56)
    }
    const handleRightDoubleClick = () => {
        setrightMar(56)
    }

    return (
        <div
            ref={rulerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="w-[816px] mx-auto h-6 border-b border-gray-300 flex items-end relative select-none print:hidden">
            <div className=" w-full h-full relative" id="ruler-container">
                <Marker position={leftMar} isLeft={true} isDragging={dragLeft} onMouseDown={handleLeft} onDoubleClick={handleLeftDoubleClick} />
                <Marker position={rightMar} isLeft={false} isDragging={dragRight} onMouseDown={handleRight} onDoubleClick={handleRightDoubleClick} />
                <div className="absolute inset-x-0 bottom-0 h-full">
                    <div className="relative h-full w-[816px]">
                        {markers.map((marker) => {
                            const position = (marker * 816) / 82;
                            return (
                                <div
                                    key={marker}
                                    className="absolute bottom-0"
                                    style={{ left: `${position}px` }}
                                >
                                    {marker % 10 === 0 && (
                                        <>
                                            <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500">
                                                <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                                                    {marker / 10 + 1}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {marker % 5 === 0 && marker % 10 !== 0 && (
                                        <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
                                    )}
                                    {marker % 5 !== 0 && (
                                        <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500" />
                                    )}

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface MarkerProps {
    position: number,
    isLeft: boolean,
    isDragging: boolean,
    onMouseDown: () => void,
    onDoubleClick: () => void
}

const Marker = ({
    position, isLeft, isDragging, onDoubleClick, onMouseDown
}: MarkerProps) => {
    return (
        <div className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2" style={{ [isLeft ? "left" : "right"]: `${position}px` }} onMouseDown={onMouseDown} onDoubleClick={onDoubleClick}>
            <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
            <div className="absolute left-1/2 top-4 transform -translate-x-1/2 transition-opacity duration-150"
                style={{
                    height: "100vh",
                    width: "1px",
                    transform: "scaleX(0.5)",
                    backgroundColor: "#3b72f6",
                    display: isDragging ? "block" : "none"
                }}
            />
        </div>
    )
}