import ExtensionsCard from "./ExtensionsCard"


const ExtensionsList = ({visibleExtensions,removeExtension,handleToggleActive}:any) => {
  return (
    <div>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        
        <ExtensionsCard  visibleExtensions={visibleExtensions} removeExtension={removeExtension} handleToggleActive={handleToggleActive}/>
        


      </main>
    </div>
  )
}

export default ExtensionsList
