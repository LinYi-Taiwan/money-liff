import "./index.scss";

function EntryBox({ info }) {
    return (
        <>
            <div className="group">
                <img src={info.image} alt="" className="group-sticker" />
                <p className="group-name">{info.name}</p>
            </div>
        </>
    );
}

export default EntryBox;
